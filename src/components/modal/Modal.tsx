
"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, Search, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type BadgeType = { title: string, image: string }
type CityType = {name:string, image: string}

const Modal = () => {

    const [openList, setOpenList] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<string[]>([]);

    const badges: BadgeType[] = [
        {
            title: 'FOR EVERY OCCASION',
            image: '/assets/notation-1.png'
        },
        {
            title: 'CURATED WITH CARE',
            image: '/assets/notation-2.png'
        },
        {
            title: 'PACKAGE WITH LOVE',
            image: '/assets/notation-3.png'
        },
    ];

    const topCities: CityType[] = [
        {
            name: 'Mumbai',
            image: '/assets/cities_icon_1.png'
        },
        {
            name: 'Delhi',
            image: '/assets/cities_icon_2.png'
        },
        {
            name: 'Gurgaon',
            image: '/assets/cities_icon_6.png'
        },
        {
            name: 'Bangalore',
            image: '/assets/cities_icon_7.png'
        },
        {
            name: 'Kolkata',
            image: '/assets/cities_icon_3.png'
        },
        {
            name: 'Pune',
            image: '/assets/cities_icon_5.png'
        },
        {
            name: 'Lucknow',
            image: '/assets/cities_icon_9.png'
        },
        {
            name: 'Jaipur',
            image: '/assets/cities_icon_10.png'
        },
        {
            name: 'Hyderabad',
            image: '/assets/cities_icon_8.png'
        },
        {
            name: 'Ahemdabad',
            image: '/assets/cities_icon_4.png'
        },
    ];

    const cities: string[] = [
        "Agra",
        "Ahmedabad",
        "Ahmednagar",
        "Aizawl",
        "Ajmer",
        "Akola",
        "Aligarh",
        "Allahabad (Prayagraj)",
        "Alwar",
        "Ambarnath",
        "Ambattur",
        "Amravati",
        "Amritsar",
        "Anantapur",
        "Arrah",
        "Asansol",
        "Aurangabad",
        "Avadi",
        "Bagalkot",
        "Bally",
        "Baranagar",
        "Barasat",
        "Bardhaman",
        "Bareilly",
        "Bathinda",
        "Begusarai",
        "Belgaum",
        "Bellary",
        "Bengaluru",
        "Berhampur",
        "Bhadravati",
        "Bharatpur",
        "Bhavnagar",
        "Bhilai",
        "Bhilwara",
        "Bhiwandi",
        "Bhopal",
        "Bhubaneswar",
        "Bidar",
        "Bihar Sharif",
        "Bijapur",
        "Bikaner",
        "Bilaspur",
        "Chandigarh",
        "Chandrapur",
        "Chennai",
        "Chikmagalur",
        "Chitradurga",
        "Coimbatore",
        "Cuttack",
        "Darbhanga",
        "Davanagere",
        "Dehradun",
        "Delhi",
        "Dewas",
        "Dhanbad",
        "Dhule",
        "Durg",
        "Durgapur",
        "Eluru",
        "Erode",
        "Etawah",
        "Faridabad",
        "Farrukhabad",
        "Firozabad",
        "Gadag-Betageri",
        "Gandhinagar",
        "Gaya",
        "Ghaziabad",
        "Gorakhpur",
        "Gulbarga",
        "Guntur",
        "Gurgaon",
        "Guwahati",
        "Gwalior",
        "Hapur",
        "Haridwar",
        "Hassan",
        "Hospet",
        "Howrah",
        "Hubli-Dharwad",
        "Hyderabad",
        "Ichalkaranji",
        "Imphal",
        "Indore",
        "Jabalpur",
        "Jaipur",
        "Jalandhar",
        "Jalgaon",
        "Jalna",
        "Jammu",
        "Jamnagar",
        "Jamshedpur",
        "Jhansi",
        "Jodhpur",
        "Junagadh",
        "Kadapa",
        "Kakinada",
        "Kalyan-Dombivli",
        "Kamarhati",
        "Kanpur",
        "Karimnagar",
        "Karwar",
        "Karnal",
        "Kochi",
        "Kolhapur",
        "Kolar",
        "Kollam",
        "Kota",
        "Kozhikode",
        "Kulti",
        "Kurnool",
        "Lucknow",
        "Latur",
        "Loni",
        "Ludhiana",
        "Madurai",
        "Maheshtala",
        "Malegaon",
        "Mangalore",
        "Mandya",
        "Mathura",
        "Meerut",
        "Mirzapur",
        "Mira-Bhayandar",
        "Moradabad",
        "Mumbai",
        "Muzaffarnagar",
        "Muzaffarpur",
        "Mysore",
        "Nanded",
        "Nashik",
        "Navi Mumbai",
        "Nellore",
        "Nizamabad",
        "Noida",
        "North Dumdum",
        "Ozhukarai",
        "Pali",
        "Panihati",
        "Panipat",
        "Parbhani",
        "Patiala",
        "Patna",
        "Pondicherry",
        "Pune",
        "Purnia",
        "Raichur",
        "Raipur",
        "Rajahmundry",
        "Rajkot",
        "Ramagundam",
        "Ranchi",
        "Ratlam",
        "Rewa",
        "Rohtak",
        "Rourkela",
        "Sagar",
        "Saharanpur",
        "Salem",
        "Sangli-Miraj & Kupwad",
        "Satna",
        "Shimoga",
        "Sikar",
        "Siliguri",
        "Silchar",
        "Solapur",
        "Sonipat",
        "South Dumdum",
        "Srinagar",
        "Surat",
        "Thane",
        "Thoothukudi",
        "Thrissur",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupati",
        "Tiruppur",
        "Tiruvottiyur",
        "Udaipur",
        "Udupi",
        "Ujjain",
        "Ulhasnagar",
        "Vadodara",
        "Varanasi",
        "Vasai-Virar",
        "Vijayawada",
        "Visakhapatnam",
        "Warangal"
    ];

    const handleDropdown = (res: string) => {
        console.log(res);
        
        setQuery('');
    }

    useEffect(() => {
        const result = cities.filter((city) => city.toLowerCase().startsWith(query.toLowerCase()));
        if (!result.length) setSearchResult(['No city found!']);
        else setSearchResult(result);
    }, [query]);

    return (
        <section className='fixed inset-0 z-50 backdrop:blur-2xl bg-gray-300 text-black flex items-center justify-center'>
            <section
                className='flex flex-col relative py-4 px-8 sm:m-4 bg-gradient-to-t from-orange-100 to-orange-50 w-full h-full sm:h-auto sm:max-w-[54rem] sm:max-h-[90vh] overflow-y-auto border-0 rounded-xl gap-4 pt-0'
            >
                <section className='flex flex-row-reverse sticky top-0 z-50 backdrop-blur-3xl py-2 pt-6 bg-orange-50 items-center'>
                    <p className='block text-center sm:hidden flex-1 font-semibold'>Pick a delivery location</p>
                    <ChevronLeft className='cursor-pointer block sm:hidden text-black bg-white rounded-lg px-1.5 py-0.5 w-8 h-8' />
                    <X className='cursor-pointer hidden sm:block text-black' />
                </section>
                <section className='flex relative whitespace-nowrap bg-white items-center border-neutral-300 border-2 rounded-lg p-1.5 px-4'>
                    <Search className='text-neutral-400 pr-1' />
                    <input
                        type='text'
                        className='outline-none bg-white flex-1 border-l-2 border-neutral-300 px-2 text-sm text-neutral-600'
                        name='search'
                        id='search'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search for delivery location'
                    />
                    <section className='absolute top-[38px] left-0 right-0 shadow-2xl shadow-neutral-200'>
                        <AnimatePresence>
                            {
                                query.length > 0 &&
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.2, ease: 'linear' }}
                                    className='flex flex-col bg-white max-h-[16rem] overflow-y-auto'
                                >
                                    {
                                        searchResult.map((res, idx) => {
                                            return <p
                                                onClick={() => handleDropdown(res)}
                                                key={idx}
                                                className='w-full px-6 py-1.5 text-sm text-neutral-600 border-b-2 border-neutral-200 cursor-pointer hover:bg-neutral-100'
                                            >{res}</p>
                                        })
                                    }
                                </motion.div>
                            }
                        </AnimatePresence>
                    </section>
                </section>
                <section className='flex gap-4 sm:gap-10 items-center justify-center pt-4'>
                    {
                        badges?.map((badge: BadgeType, idx) => {
                            return <article
                                key={idx}
                                className='flex flex-col items-center text-neutral-700 gap-2'
                            >
                                <Image
                                    alt={badge?.title || 'icon for badge'}
                                    src={badge?.image}
                                    className="transform hover:-translate-y-1 hover:scale-105 transition ease-in-out cursor-pointer duration-100"
                                    width={30}
                                    height={30}
                                />
                                <p className='text-center text-[10px] sm:text-xs font-semibold'>{badge?.title}</p>
                            </article>
                        })
                    }
                </section>
                <section className='flex flex-col gap-4 justify-center'>
                    <p className='text-neutral-600'>Top Cities</p>
                    <section className='flex flex-wrap gap-4 items-center justify-center'>
                        {
                            topCities?.map((city: CityType, idx) => {
                                return <article key={idx} className='flex flex-col items-center gap-2'>
                                    <Image
                                        alt={city?.name || 'icon for badge'}
                                        src={city?.image}
                                        className="cursor-pointer border-2 rounded-full border-transparent hover:border-neutral-600 transform hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-100 w-[50px] h-[50px] sm:h-[60px] sm:w-[60px]"
                                        width={60}
                                        height={60}
                                    />
                                    <p className='text-xs sm:text-sm select-none text-neutral-600'>{city.name}</p>
                                </article>
                            })
                        }
                    </section>
                </section>
                <AnimatePresence>
                    {
                        openList &&
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2, ease: 'linear' }}
                            className='flex flex-col items-center'
                        >
                            <p className='text-md text-neutral-400 p-4'>Other Cities</p>
                            <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 text-neutral-700 max-h-[10rem] overflow-y-auto w-full'>
                                {
                                    cities?.map((city: string, idx) => {
                                        return <article key={idx}>
                                            <p
                                                className='text-xs sm:text-sm select-none cursor-pointer hover:scale-98 hover:bg-orange-50 px-4 py-1.5 transition-all rounded-md'
                                            >{city}</p>
                                        </article>
                                    })
                                }
                            </section>
                        </motion.div>
                    }
                </AnimatePresence>
                <section className='flex w-full justify-center items-center'>
                    <button onClick={() => setOpenList(!openList)} type='button' className='text-md text-neutral-400 cursor-pointer'>{!openList ? 'Show All Cities' : 'Hide All Cities'}</button>
                </section>
            </section>
        </section>
    )
}

export default Modal
