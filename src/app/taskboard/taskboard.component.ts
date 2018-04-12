/* tslint:disable:max-line-length */
import { Component } from '@angular/core';

interface Tasks {
  title: string;
  description: string;
  class?: string;
}

interface Taskboard {
  title: string;
  tasks: Tasks[];
}

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent {
  taskboard: Taskboard[] = [{
    title: 'backlog',
    tasks: [{
      title: 'Responsive bug',
      description: 'Etiam porta sem malesuada magna mollis euismod.'
    }, {
      title: 'Travel checklist',
      description: 'Curabitur blandit tempus porttitor.'
    }, {
      title: 'Budget review',
      description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      class: 'task-status-success'
    }]
  }, {
    title: 'todo',
    tasks: [{
      title: 'QA Testing',
      description: 'Etiam porta sem malesuada magna mollis euismod.'
    }, {
      title: 'Layout design',
      description: 'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      class: 'task-status-danger'
    }, {
      title: 'Fix navigation menu',
      description: 'Donec sed odio dui.',
      class: 'task-status-info'
    }, {
      title: 'Update bootstrap 4',
      description: 'Aenean lacinia bibendum nulla sed consectetur.'
    }, {
      title: 'Run build tools',
      description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
    }, {
      title: 'List article ideas',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      class: 'task-status-success'
    }, {
      title: 'Reactjs fixes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
      title: 'Implement SSL',
      description: 'Etiam porta sem malesuada magna mollis euismod.',
      class: 'task-status-warning'
    }, {
      title: 'Cleanup code',
      description: 'Sollicitudin',
      class: 'task-status-danger'
    }]
  }, {
    title: 'In Process',
    tasks: [{
      title: 'QOS Assessment',
      description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
    }, {
      title: 'Schedule new tasks',
      description: 'Sed posuere consectetur est at lobortis.',
      class: 'task-status-warning'
    }, {
      title: 'Add dashboard variants',
      description: 'Nulla vitae elit libero, a pharetra augue.'
    }, {
      title: 'Extended color scheme support',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
    }, {
      title: 'Merge unit tests',
      description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
      class: 'task-status-info'
    }, {
      title: 'Test final version',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    }]
  }, {
    title: 'backlog',
    tasks: [{
      title: 'Integrate Angular 4',
      description: 'Nulla vitae elit libero, a pharetra augue.'
    }, {
      title: 'Additional fields',
      description: 'Donec id elit non mi porta gravida at eget metus.'
    }, {
      title: 'Draggable task board',
      description: 'Sed posuere consectetur est at lobortis.',
      class: 'task-status-danger'
    }, {
      title: 'Setup CI server',
      description: 'Maecenas faucibus mollis interdum.'
    }, {
      title: 'Assign new tasks',
      description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      class: 'task-status-success'
    }, {
      title: 'Contact administrator',
      description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
    }, {
      title: 'Commit changes',
      description: 'Aenean lacinia bibendum nulla sed consectetur.'
    }]
  }, {
    title: 'Complete',
    tasks: [{
      title: 'Store new files',
      description: 'Sed posuere consectetur est at lobortis.'
    }, {
      title: 'Build landing page',
      description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.'
    }, {
      title: 'Setup basic layout',
      description: 'Vestibulum id ligula porta felis euismod semper.',
      class: 'task-status-info'
    }, {
      title: 'Graphical fixes',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
    }, {
      title: 'Email alerts',
      description: 'Donec sed odio dui.'
    }]
  }];
}
