import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@abticketingapp/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
