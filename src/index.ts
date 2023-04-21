import express from 'express'
import {Request,Response} from 'express'
import {Ticket, Aircrafts} from "./db/sequelize";

const app = express()
const port = 3000


app.get('/tickets/:id', (req:Request<{id:string},{},{},{}>, res: Response<{}>) => {
	Ticket.findAll({where:{ticket_no: req.params.id}}).
		then(ticketObj=>{res.json(ticketObj[0].dataValues)}).
		catch(err=>{res.send('Not found, bro. Template:  /tickets/0005432000867').status(404)})
})

app.get('/aircrafts/:id', (req:Request<{id:string},{},{},{}>, res: Response<{}>) => {
	Aircrafts.findAll({where:{aircraft_code: req.params.id}}).
	then(ticketObj=>{res.json(ticketObj[0].dataValues)}).
	catch(err=>{res.send('Not found, bro. Template:  /aircrafts/773').status(404)})
})
app.post('/aircrafts/:id',(req: Request,res: Response)=>{
	Aircrafts.create()
})



//'666','{"en": "Magic carpet", "ru": "Ковёр самолёт"












app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
