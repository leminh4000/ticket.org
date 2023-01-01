import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ticket.org/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
