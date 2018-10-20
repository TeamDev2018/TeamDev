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
        if (this.text) {
          p.fill('black');
          p.textAlign(p.CENTER);
          p.textSize(this.scale * 40);
          p.text(this.text, 0, 20);
        }
      };
      // scale affects the size of the collider
      circle.scale = p.random(0.7, 1);
      circle.setCollider('circle', 0, 0, 50);
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
        circle.text = p.users[i].FirstName[0] + p.users[i].LastName[0];
        p.circles.add(circle);
      }
      const addButton = p.addRandomCircle();
      addButton.text = '+';
      addButton.onMouseReleased = () => {
        that.addNewUser();
      };
      // scale affects the size of the collider
      addButton.scale = 1.25;
      addButton.mass = addButton.scale;
      addButton.setCollider('circle', 0, 0, 50);
      // mass determines the force exchange in case of bounce
      p.addButton = addButton;
    };

    p.draw = () => {
      p.background('#0000000');

      // all sprites bounce at the screen edges
      for (let i = 0; i < p.allSprites.length; i++) {
        const s = p.allSprites[i];
        s.update();
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

        // s.collider.draw();
      }

      p.drawSprites();
      p.addButton.mouseUpdate();
      // circles bounce against each others and against boxes
      p.allSprites.bounce(p.allSprites);
      // p.addButton.collider.draw();
    };
  }

  addNewUser() {
    const dialogRef = this.dialog.open(NewUserDialogComponent, {
      width: '40%'
    });

    dialogRef.beforeClose().subscribe((newUser: User) => {
      if (newUser) {
        this.users.push(newUser);
        const circle = this.P5.addRandomCircle(newUser);
        circle.text = newUser.FirstName[0] + newUser.LastName[0];
        this.P5.circles.add(circle);
      }
    });
  }
}
