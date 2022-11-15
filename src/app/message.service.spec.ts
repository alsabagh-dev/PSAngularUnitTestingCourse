import { MessageService } from "./message.service"

describe('MessageService',() => {
  // system under design
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  })

  it('should have no messages to start with', () => {
    // act
    const len = service.messages.length;

    // assert
    expect(len).toBe(0);
  })

  it('should add a message when add is called', () => {
    // act
    service.add('2rmaat');
    const len = service.messages.length;

    // assert
    expect(len).toBeGreaterThan(0);
  })

  it('should delete all messages when clear is called', () => {
    // act
    service.add('2rmaat');
    service.add('2rmaat');
    service.add('2rmaat');

    service.clear()

    // assert
    expect(service.messages).toEqual([]);
  })

})
