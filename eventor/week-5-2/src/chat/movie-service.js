var EventEmitter = require('../lib/event-emitter');

class movieService extends EventEmitter {
    constructor() {
        super();
        window.ps = this;

        this.movies = [
            { id: 1, title: 'La La Land', 
                body: 'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip..', 
                src: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_(film).png'},
            { id: 2, title: 'La La Land', 
                body: 'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip', 
                src: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_(film).png'},
            { id: 3, title: 'La La Land', 
                body: 'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip', 
                src: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_(film).png'}
        ];
    }

}
angular.module('chat-app').service('movieService', movieService);

