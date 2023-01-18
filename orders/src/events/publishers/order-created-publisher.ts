import { Publisher, OrderCreatedEvent, Subjects } from '@abticketingapp/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

