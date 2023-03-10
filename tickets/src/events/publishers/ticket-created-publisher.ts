import {Publisher, Subjects, TicketCreatedEvent} from '@ticket.org/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated
}
