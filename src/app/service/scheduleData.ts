import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'India',
    AwayTeam:'Bali United',HomeScore:3,AwayScore:2,
    RefName:'Joko',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'Indonesia',
    AwayTeam:'Malaysia',HomeScore:4,AwayScore:2,
    RefName:'kasjo',notes:'Pertandingan Baik'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'PERSIS SOLO',
    AwayTeam:'Malaysia',HomeScore:2,AwayScore:4,
    RefName:'Parto',notes:'Pertandingan ada kesedihan'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'RRQ',
    AwayTeam:'Thailand',HomeScore:2,AwayScore:4,
    RefName:'Parto',notes:'Pertandingan 3 kartu merah dari Parto'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'Persis Solo',
    AwayTeam:'PERIB Bandung',HomeScore:2,AwayScore:3,
    RefName:'Parto',notes:'Pertandingan aman'},
]

export const TEAMS:Team [] = [
    {id:1,name:'Indonesia',type:'Over 30'},
    {id:2,name:'Malaysia',type:'Over 30'},
    {id:3,name:'Thailand',type:'Over 30'},
    {id:4,name:'Persija',type:'Over 30'},
    {id:5,name:'India',type:'Over 30'},
    {id:6,name:'Persis Solo',type:'Over 30'},
]