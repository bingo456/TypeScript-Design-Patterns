// Type definitions for form-data
// Project: https://github.com/felixge/node-form-data
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/form-data.d.ts

declare module "form-data" {
	export class FormData {
		append(key: string, value: any, options?: any): FormData;
		getHeaders(): Object;
		// TODO expand pipe
		pipe(to: any): any;
		submit(params: string|Object, callback: (error: any, response: any) => void): any;
	}
}
