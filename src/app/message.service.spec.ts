import { MessageService } from "./message.service"

describe('MessageService', ()=> {
  let service: MessageService;

  beforeEach( ()=> {
    service  = new MessageService();
  })

  it('should have no messages to start',() => {
    // act
    const len = service.messages.length;
    // assert
    expect(len).toBe(0)
  })

  it('should add a message when add is called',() => {
    // act
    service.add('Hi');
    const len = service.messages.length;
    // assert
    expect(len).toBe(1);
  })

  it('should remove our messages when clear is called', () => {
    // act
    service.add('zizo');
    service.add('Elzoz');
    service.add('zoz');
    service.add('Abo el-zoz');
    service.add('😎');

    service.clear();

    const len = service.messages.length;

    // assert
    expect(len).toBe(0);

  })
})
