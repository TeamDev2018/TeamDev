import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { MatDialog } from '../../../node_modules/@angular/material';
import { NewUserDialogComponent } from '../new-user-dialog/new-user-dialog.component';
import * as p5 from 'p5';
import init from 'vue-p5-play';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {

  users: Array<User>;
  private P5;
  private circles;

  constructor(public dialog: MatDialog,
    private router: Router,
    private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.createCanvas();
    });
  }

  private createCanvas() {
    init(p5);
    this.P5 = new p5((p) => { this.sketch(this, p); });
  }
  private sketch(that: TeamOverviewComponent, p: any) {
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
          p.text(this.text, 0, 15);
        }
      };
      circle.scale = p.random(0.7, 1);
      circle.setCollider('circle', 0, 0, 50);
      // mass determines the force exchange in case of bounce
      circle.mass = circle.scale;
      return circle;
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight / 2);
      p.camera.position.x = p.width / 2;
      p.camera.position.y = p.height / 2;
    };

    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight / 2);
      canvas.parent('p5play');

      for (let i = 0; i < p.users.length; i++) {
        const circle = p.addRandomCircle();
        circle.text = p.users[i].FirstName[0] + p.users[i].LastName[0];

        circle.onMouseReleased = () => {
          this.router.navigate(['/user-detail', i]);
        };

        p.circles.add(circle);
      }
      const addButton = p.addRandomCircle();
      addButton.text = '+';
      addButton.onMouseReleased = () => {
        that.addNewUser();
      };
      addButton.scale = 1.25;
      // mass determines the force exchange in case of bounce
      addButton.mass = addButton.scale;
      p.addButton = addButton;
    };

    p.draw = () => {
      p.background('#0000000');

      // all sprites bounce at the screen edges
      for (let i = 0; i < p.allSprites.length; i++) {
        const s = p.allSprites[i];
        s.update();
        const radius = s.scale * 50;
        if (s.position.x < radius) {
          s.position.x = radius + 1;
          s.velocity.x = p.abs(s.velocity.x);
        }

        if (s.position.x > p.width - radius ) {
          s.position.x = p.width - radius - 1;
          s.velocity.x = -p.abs(s.velocity.x);
        }

        if (s.position.y < radius) {
          s.position.y = radius + 1;
          s.velocity.y = p.abs(s.velocity.y);
        }

        if (s.position.y > p.height - radius  ) {
          s.position.y = p.height - radius - 1;
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
        const id = this.userService.createUser(newUser);
        const circle = this.P5.addRandomCircle();
        circle.text = newUser.FirstName[0] + newUser.LastName[0];
        circle.onMouseReleased = () => {
          this.router.navigate(['/user-detail', id]);
        };
        this.P5.circles.add(circle);
      }
    });
  }

}
