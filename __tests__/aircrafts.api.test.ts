import {app} from "../src";
import request from "supertest";


describe ('test API /aircafts',  ()=>{

	let aircraft = {
		aircraft_code: '666',
		model: {"en": "Magic carpet", "ru": "Ковёр самолёт"},
		range: 666
	}

	it('POST   should return 201',async ()=>{
		let a = await request(app)
			.post('/aircrafts/')
			.send(aircraft)
			.expect(201)
	})
	it('GET    should return 200', async()=>{
		await request(app)
			.get('/aircrafts/666')
			.expect(200,'{"aircraft_code":"666","model":{"en":"Magic carpet","ru":"Ковёр самолёт"},"range":666}')
	})
	it('DELETE should return 200', async ()=>{
		await request(app)
			.del('/aircrafts/666')
			.expect(200)
	})
})

