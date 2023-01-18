import { Publisher, OrderCancelledEvent, Subjects } from '@abticketingapp/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
