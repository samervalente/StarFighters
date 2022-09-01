import axios from "axios"
import {Request, Response} from "express"
import { Octokit } from "octokit";

const octokit: any = new Octokit({auth: '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' });

export async function compareStars(req: Request, res: Response){
const {firstUser, secondUser} = req.body
let firstUserStarsCount = 0;
let secondUserStarsCount = 0;
let winner: any = "";
let loser: any = "";
let draw: boolean = false;

try {
    
 const firstUserData = await axios.get(`https://api.github.com/users/${firstUser}/repos`)
   if(!firstUserData){
    return res.sendStatus(404)
   }

   firstUserData.data.map((repo:any) => {
    firstUserStarsCount += +repo.stargazers_count
   } )

   const secondUserData = await axios.get(`https://api.github.com/users/${secondUser}/repos`)
   if(!secondUserData){
    return res.sendStatus(404)
   }

   secondUserData.data.map((repo:any) => {
    secondUserStarsCount += +repo.stargazers_count
   } )

   if(firstUserStarsCount > secondUserStarsCount){
    winner = firstUser
    loser = secondUser
   }else if(secondUserStarsCount > firstUserStarsCount){
    winner = secondUser
    loser = firstUser
   }else{
    winner = null
    loser = null
    draw = true
   }


   const result = {winner, loser, draw}
   
   res.status(200).send(result)

    

} catch (error) {
    res.sendStatus(500)
}

}