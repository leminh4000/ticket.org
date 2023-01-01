import { Subjects } from './subjects';
import { Listener } from "./base-listener";
import nats from "node-nats-streaming";
import { TicketCreatedEvent } from "./ticket-created-event";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
    subject:Subjects.TicketCreated = Subjects.TicketCreated
    queueGroupName = "payments-service";
    onMessage = (data: TicketCreatedEvent['data'], msg: nats.Message) => {
      console.log("Event data!", data);
      console.log("Event data!", data.title);
      console.log("Event data!", data.price);
  
      msg.ack();
    };
  }
  