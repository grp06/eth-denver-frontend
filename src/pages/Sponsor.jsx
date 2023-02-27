import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MagnifyingGlass } from '@heroicons/react/20/solid'
import challenges from '../assets/challenges.json'
import sponsors from '../assets/sponsors.json'
import Header from '../components/Header'

const Sponsor = () => {
  const { sponsorName } = useParams()
  const [sponsorChallenges, setSponsorChallenges] = useState([])
  console.log('🚀 ~ Sponsor ~ sponsorChallenges:', sponsorChallenges)

  useEffect(() => {
    const getChallengesBySponsor = (sName) => {
      const sponsor = sponsors.find((s) => s.name === sName)
      return challenges.filter((c) => c.submittedByOrgName === sponsor.name)
    }
    const foundChallenges = getChallengesBySponsor(sponsorName)
    console.log('🚀 ~ useEffect ~ foundChallenges:', foundChallenges)
    setSponsorChallenges(foundChallenges)
  }, [])

  return (
    <div>
      <Header />
      <div className="relative mx-auto h-screen -mt-16 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="absolute bottom-5 left-1/2 w-8/12 transform -translate-x-1/2">
          <div className="mt-1 mx-auto flex rounded-md shadow-md">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full py-4 rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search Docs"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sponsor
