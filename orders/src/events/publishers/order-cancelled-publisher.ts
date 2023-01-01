import { Subjects, Publisher, OrderCancelledEvent } from "@ticket.org/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
