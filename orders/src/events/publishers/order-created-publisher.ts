import { Publisher, OrderCreatedEvent, Subjects } from "@ticket.org/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
