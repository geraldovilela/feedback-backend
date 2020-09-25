import { uuid } from 'uuidv4';

class Feedback {
  feedback_id: string;

  user_post: string;

  user_evaluated: string;

  points_improvments: string;

  points_to_keep: string;

  sugestions: string;

  final_feedback: string;

  constructor({
    user_post,
    user_evaluated,
    points_improvments,
    points_to_keep,
    sugestions,
    final_feedback,
  }: Omit<Feedback, 'feedback_id'>) {
    this.feedback_id = uuid();
    this.user_post = user_post;
    this.user_evaluated = user_evaluated;
    this.points_improvments = points_improvments;
    this.points_to_keep = points_to_keep;
    this.sugestions = sugestions;
    this.final_feedback = final_feedback;
  }
}

export default Feedback;
