var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NewUserDialogComponent } from './new-user-dialog/new-user-dialog.component';
import { USERS } from '../data/users';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as p5 from 'p5';
import init from 'vue-p5-play';
var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.title = 'TeamDev';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.users = USERS;
        this.createCanvas();
    };
    AppComponent.prototype.createCanvas = function () {
        init(p5);
        this.P5 = new p5(this.sketch);
    };
    AppComponent.prototype.sketch = function (p) {
        p.setup = function () {
            var canvas = p.createCanvas(1200, 200);
            canvas.parent('p5play');
            p.circles = new p.Group();
            for (var i = 0; i < 20; i++) {
                var circle = p.createSprite(p.random(0, p.width), p.random(0, p.height));
                // circle.addAnimation('normal', 'assets/asterisk_circle0006.png', 'assets/asterisk_circle0008.png');
                circle.setCollider('circle', -2, 2, 55);
                circle.setSpeed(p.random(2, 3), p.random(0, 360));
                // scale affects the size of the collider
                circle.scale = p.random(0.5, 1);
                // mass determines the force exchange in case of bounce
                circle.mass = circle.scale;
                p.circles.add(circle);
            }
        };
        p.draw = function () {
            p.background(255, 255, 255);
            // circles bounce against each others and against boxes
            p.circles.bounce(p.circles);
            // all sprites bounce at the screen edges
            for (var i = 0; i < p.allSprites.length; i++) {
                var s = p.allSprites[i];
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
                if (s.position.y > p.height) {
                    s.position.y = p.height - 1;
                    s.velocity.y = -p.abs(s.velocity.y);
                }
            }
            p.drawSprites();
        };
    };
    AppComponent.prototype.addNewUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NewUserDialogComponent, {
            width: '40%'
        });
        dialogRef.beforeClose().subscribe(function (newUser) {
            if (newUser) {
                _this.users.push(newUser);
            }
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [MatDialog])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map