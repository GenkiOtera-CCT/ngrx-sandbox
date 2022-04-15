import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api'
import { entityConfig } from './entity-metadata';

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

    urlTranslate(url: string): string{
        const regexp = /(\/?[^\/]+\/)([^\/]+)(\/?.*)/g;
        const match = regexp.exec(url);
    
        if(!match || match.length !== 4 ) { throw new Error('URL形式が不正です')}
    
        const requestEntityName = match[2];
        const apiEntityName = this.convertApiEntityName(requestEntityName);
    
        return url.replace(regexp, `$1${apiEntityName}$3`)
          .replace(/\/\?/g, '?')
          .replace(/\/$/g, '');
    }

    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl{
        return utils.parseRequestUrl(this.urlTranslate(url));
    }

    // Private Methods
    private get lowerCasePluralNames(): {} | { [name: string]: string } {
        return !entityConfig.pluralNames ? {} :
            Object.entries(entityConfig.pluralNames)
            .reduce((x, y) => 
                Object.assign(x, { [y[0].toLowerCase()]: y[1].toLowerCase() }), {});
    }
    
    private toPlural(singluarName: string): string {
        return this.lowerCasePluralNames[singluarName] || `${singluarName}s`;
    }

    private convertApiEntityName(entityName: string): string {
        return Object.keys(this.api)
            .map(x => x.toLowerCase())
            .includes(entityName) ? entityName : this.toPlural(entityName);
    }
}
