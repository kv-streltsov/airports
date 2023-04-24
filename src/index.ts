import express from 'express'
import {Request,Response} from 'express'
import {Ticket, Aircrafts} from "./db/sequelize";

export const app = express()
const port = 3000

const jsonBody = express.json()
app.use(jsonBody)


app.get('/aircrafts/:id', (req:Request<{id:string},{},{},{}>, res: Response<{}>) => {
	Aircrafts.findAll({where:{aircraft_code: req.params.id}})
		.then(ticketObj=>{res.status(200).json(ticketObj[0].dataValues)})
		.catch(err=>{res.send('Not found, bro. Template:  /aircrafts/773').status(404)})
})
app.post('/aircrafts',(req: Request,res: Response)=>{
	Aircrafts.create( req.body)
		.then(data=>{res.status(201).send(data.dataValues)})
		.catch(err=> res.status(400).send(err))

})
app.put('/aircrafts',(req:any,res:any)=>{


})
app.delete('/aircrafts/:id',(req:any,res:any)=> {
	Aircrafts.destroy({where: {aircraft_code: req.params.id}})
		.then(data=>{res.sendStatus(200)})
		.catch(err =>{ req.status(404).send(err)})
})









if(process.env.NODE_ENV !== 'test'){
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	})}
