import { animate, query, sequence, style } from '@angular/animations';
export const routeChange = [
    query(':leave, :enter', style({ position: 'fixed', height: '100%', width: '100%' }), { optional: true }),
    query(':enter', style({ visibility: 'hidden' })),
    sequence([
        query(':leave', [
            style({ overflow: 'hidden', height: '100%' }),
            animate('0.5s ease-in-out', style({ height: '0%' })),
        ], { optional: true }),
        query(':enter', [
            style({ visibility: 'visible', overflow: 'hidden', height: '0%' }),
            animate('0.5s ease-in-out', style({ height: '100%' }))
        ], { optional: true })
    ])
];
