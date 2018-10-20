import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { USERS } from '../data/users';
import { User } from '../model/user';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as p5 from 'p5';
import init from 'vue-p5-play';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TeamDev';
  users: Array<User>;
  private P5;
  private circles;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.users = USERS;
    this.createCanvas();
  }
  private createCanvas() {
    init(p5);
    this.P5 = new p5((p) => { this.sketch(this, p); });
  }
  private sketch(that: AppComponent, p: any) {
    p.users = that.users;
    p.circles = new p.Group();

    p.addRandomCircle = () => {
      const circle = p.createSprite(p.random(0, p.width), p.random(0, p.height));

        circle.setSpeed(p.random(2, 4), p.random(0, 360));

        circle.draw = function() {

          p.fill(this.shapeColor);
          p.ellipse(0, 0, 100 , 100 );
        };
        // scale affects the size of the collider
        circle.scale = p.random(0.7, 1);
        circle.setCollider('circle', -2, 2, circle.scale * 50);
        // mass determines the force exchange in case of bounce
        circle.mass = circle.scale;
        return circle;
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
    };

    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight / 2);
      canvas.parent('p5play');

      for (let i = 0; i < p.users.length; i++) {
        const circle = p.addRandomCircle();
        p.circles.add(circle);
      }
      const addButton = p.addRandomCircle();
      addButton.onMouseReleased = () => {
        that.addNewUser();
      };
      // scale affects the size of the collider
      addButton.scale = 1.25;
      addButton.mass = addButton.scale;
      addButton.setCollider('circle', -2, 2, addButton.scale * 50);
      // mass determines the force exchange in case of bounce
      p.addButton = addButton;
    };

    p.draw = () => {
      p.background('#0000000');
      // circles bounce against each others and against boxes
      p.allSprites.bounce(p.allSprites);

      // all sprites bounce at the screen edges
      for (let i = 0; i < p.allSprites.length; i++) {
        const s = p.allSprites[i];
        // s.update();
        s.position.x += s.velocity.x;
        s.position.y += s.velocity.y;
        if (s.position.x < 0) {
          s.position.x = 1;
          s.velocity.x = p.abs(s.velocity.x);
        }

        if (s.position.x > p.width) {
          s.position.x = p.width - 1;
          s.velocity.x = -p.abs(s.velocity.x);
        }

        if (s.position.y < 0) {
          s.position.y = 1;
          s.velocity.y = p.abs(s.velocity.y);
        }

        if (s.position.y > p.height ) {
          s.position.y = p.height - 1;
          s.velocity.y = -p.abs(s.velocity.y);
        }

      }

      p.drawSprites();
      p.textAlign(p.CENTER);
      for (let i = 0; i < p.circles.length; i++) {
        const s = p.circles[i];
        p.textSize(s.scale * 40);
        const user = p.users[i];
        p.text(user.FirstName[0] + user.LastName[0], s.position.x, s.position.y + s.scale * 20);
      }
      p.addButton.mouseUpdate();
      p.textSize(80);
      p.text('+', p.addButton.position.x, p.addButton.position.y + 35);
    };
  }

  addNewUser() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '40%'
    });

    dialogRef.beforeClose().subscribe((newUser: User) => {
      if (newUser) {
        this.users.push(newUser);
        this.P5.circles.add(this.P5.addRandomCircle());
      }
    });
  }
}
