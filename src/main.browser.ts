
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent,TRANSLATE_PROVIDERS } from './app/translate'


bootstrap(AppComponent, [
    ...TRANSLATE_PROVIDERS
]);