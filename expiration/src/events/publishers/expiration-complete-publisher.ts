import { Subjects, Publisher, ExpirationCompleteEvent } from "@abticketingapp/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
