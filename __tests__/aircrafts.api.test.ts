import {app} from "../src";
import request from "supertest";


describe ('test API /aircafts',  ()=>{

	let aircraft = {
		aircraft_code: '666',
		model: {"en": "Magic carpet", "ru": "Ковёр самолёт"},
		range: 666
	}

	// it('should return 200', async()=>{
	// 	await request(app)
	// 		.get('/aircrafts/773')
	// 		.expect(200,'{"aircraft_code":"773","model":"Боинг 777-300","range":11100}')
	// })
	//
	it('should return 201',async ()=>{
		await request(app)
			.post('/aircrafts/')
			.send(aircraft)
			.expect(201)
	})

})

