import { Router } from 'express';
import connection from '../database/connection';
import Feedback from '../models/Feedback';

const feedbackRouter = Router();
feedbackRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const feedbacks = await connection('feedback')
      .select('*')
      .where('user_post', id);

    return response.status(200).json(feedbacks);
  } catch (err) {
    return response.status(401).json({ error: err.message });
  }
});

feedbackRouter.post('/', async (request, response) => {
  try {
    const {
      user_post,
      user_evaluated,
      points_improvments,
      points_to_keep,
      sugestions,
      final_feedback,
    } = request.body;

    const newFeedback = new Feedback({
      user_post,
      user_evaluated,
      points_improvments,
      points_to_keep,
      sugestions,
      final_feedback,
    });

    await connection('feedbacks').insert(newFeedback);

    return response.status(201).json(newFeedback);
  } catch (err) {
    return response.status(400).json({ erro: err.message });
  }
});

feedbackRouter.get('/', async (request, response) => {
  try {
    const data = await connection('feedbacks').select('*');
    return response.status(200).json(data);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

feedbackRouter.put('/:id', async (request, response) => {
  try {
    const {
      user_post,
      user_evaluated,
      points_improvments,
      points_to_keep,
      sugestions,
      final_feedback,
    } = request.body;
    const feedback_id = request.params.id;

    const trx = await connection.transaction();

    const feedback = await trx('feedbacks')
      .select('*')
      .where('feedback_id', feedback_id)
      .first();
    const updated_feedback = {
      user_post:
        user_post === feedback.user_post ? feedback.user_post : user_post,
      user_evaluated:
        user_evaluated === feedback.user_evaluated
          ? feedback.user_evaluated
          : user_evaluated,
      points_improvments:
        points_improvments === feedback.points_improvments
          ? feedback.points_improvments
          : points_improvments,
      points_to_keep:
        points_to_keep === feedback.points_to_keep
          ? feedback.points_to_keep
          : points_to_keep,
      sugestions:
        sugestions === feedback.sugestions ? feedback.sugestions : sugestions,
      final_feedback:
        final_feedback === feedback.final_feedback
          ? feedback.final_feedback
          : final_feedback,
    };
    const data = await trx('feedbacks')
      .update({
        user_post: updated_feedback.user_post,
        user_evaluated: updated_feedback.user_evaluated,
        points_improvments: updated_feedback.points_improvments,
        points_to_keep: updated_feedback.points_to_keep,
        sugestions: updated_feedback.sugestions,
        final_feedback: updated_feedback.final_feedback,
      })
      .returning('*');

    await trx.commit('*');

    return response.json(data);
  } catch (err) {
    await trx.rollback();
    return response.status(400).json({ error: err.message });
  }
});
export default feedbackRouter;
