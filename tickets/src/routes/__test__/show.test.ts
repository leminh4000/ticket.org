import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";

it("returns 404 if the ticket is not found", async () => {
    await request(app)
    .get("/api/tickets/111111111111111111111111")
    .set("Cookie", global.signin())
    .send()
    .expect(404);
});

it("creates a ticket with valid inputs", async () => {
  const title='concert'  
  const price=20
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({
      title,
      price,
    })
    .expect(201);
const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .set("Cookie", global.signin())
    .send()
    .expect(200);
    expect(ticketResponse.body.title).toEqual(title)
    expect(ticketResponse.body.price).toEqual(price)
    
});
