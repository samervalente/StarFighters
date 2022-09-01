import connection from "../database/postgres"


export async function validateUserExistenceBattle(firstUser: string, secondUser: string, wins: number, losses:number, draws: boolean){
    const {rows: users} = await connection.query(`SELECT * FROM fighters WHERE username = $1 OR username = $2`,[firstUser, secondUser])


}

export async function registerUserBattle(winner: string, wins: number, losses:number, draws: boolean){
    await connection.query(`INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, $2, $3)`, [winner, wins, draws])
}

export async function updateRegisterBattle(){
    
}
