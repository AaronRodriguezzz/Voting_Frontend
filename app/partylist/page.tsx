import Background from "../components/Background"
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import candidates from './Candidates'; // assuming your object is exported from here

export default function Partylist(){
    return(
        <main className="min-h-screen w-screen bg-white flex flex-row">
            <Background>
                <Image
                    src="/initial/Candidates.png"
                    alt="Voting"
                    width={280}
                    height={220}
                    className="mx-auto mt-9 my-2"
                />

                <div className="w-[80%] mx-auto my-2 bg-white flex flex-col justify-center p-4 rounded-lg shadow-lg shadow-gray-700">
                    {Object.entries(candidates).map(([position,candidateList]) => (
                        <div className="flex flex-col justify-between p-2 border-b" key={position}>
                            <h2 className="text-md md:text-xl text-red-500">{position}</h2>
                            
                            <div className="block">
                                {candidateList.map((candidate, index) => (
                                    <div className="w-full flex flex-row justify-between p-2" key={index}>
                                        <div className="leading-[.8]">
                                            <h3 className="font-bold text-[18px] md:text-[30px] tracking-tighter">{candidate.name}</h3>
                                            <p className="text-sm md:text-md">{candidate.partylist}</p>
                                        </div>
                                        <button className="underline bg-transparent border-none" >
                                            <CiSearch size={25} className="hover:text-red-500 transition-colors"/>
                                        </button>
                                    </div>
                                ))}
                            </div>   
                        </div> 
                    ))}
                </div>

            </Background>
        </main>
        
    )
}