import { InMemoryDbService } from 'angular-in-memory-web-api'

export class MockWebApi implements InMemoryDbService {
    private api = {
        heroes: [
            {id: 1, name: 'Tercel'},
            {id: 2, name: 'Bob'},
        ]
    };

    createDb(){
        return this.api;
    }
}
