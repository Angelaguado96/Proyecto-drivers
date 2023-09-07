const axios = require('axios')

const { Teams } = require('../db')


const pedidoTeams = async () => {

    const bdTeams =  await Teams.findAll()
    
    
    // Obtén los datos de la a pi 
    const api = (await axios.get(`http://localhost:5000/drivers`)).data;
    for (const {teams} of api ){
        if(teams){
            const teamsArray = teams.split(",").map((t) => t.trim());
            for (const teamName of teamsArray) {
                const existingTeam = await Teams.findOne({ where: { name: teamName } });
                if (!existingTeam) {
                    await Teams.create({ name: teamName });
                }
            }
        }
    }
    
    return [...bdTeams]
}



module.exports = { pedidoTeams }



