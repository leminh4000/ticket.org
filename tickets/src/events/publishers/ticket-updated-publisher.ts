import {Publisher, Subjects, TicketUpdatedEvent} from '@ticket.org/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
