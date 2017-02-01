import {
    Component,
    ChangeDetectionStrategy
} from '@angular/core';
import {
    Locale,
    LocalizationService,
    LocaleService
} from 'angular2localization';

@Component({
               selector:        'plugin-terra-basic-app',
               template:        require('./plugin-terra-basic.component.html'),
               styles:          [require('./plugin-terra-basic.component.scss')],
               changeDetection: ChangeDetectionStrategy.Default
           })

export class PluginTerraBasicComponent extends Locale
{
    private myVariable:string;
    
    public constructor(public local:LocaleService,
                       public localization:LocalizationService)
    {
        super(local, localization);
        
        this.myVariable = "Test123";
        
    }
    
}