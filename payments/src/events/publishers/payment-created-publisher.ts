import { Subjects, Publisher, PaymentCreatedEvent } from "@abticketingapp/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
