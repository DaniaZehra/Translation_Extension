import React, { useState } from 'react'
import './index.css' // Ensure Tailwind CSS is included here

const translations = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  hd: 'Hindi',
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [originalText, setOriginalText] = useState('')
  const [translatedLanguage, setTranslatedLanguage] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value)
  }

  const handleTextChange = (event) => {
    setOriginalText(event.target.value)
  }

  const handleSubmit = () => {
    // Set the translated language (for display)
    setTranslatedLanguage(
      translations[selectedLanguage] || 'Please select a language'
    )

    // Simulate translation process
    setTranslatedText(originalText ? `${originalText}` : '')
  }

  return (
    <div className='App flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-400 to-red-300'>
      <div className='w-full max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-300'>
        <header className='mb-8 text-center text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
          Translation Extension
        </header>

        <h2 className='text-2xl font-semibold text-gray-900 mb-6 text-center'>
          Choose Your Translation Language
        </h2>

        <div className='mb-6'>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className='w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300'
          >
            <option value='' disabled>
              Select a language
            </option>
            {Object.keys(translations).map((key) => (
              <option key={key} value={key}>
                {translations[key]}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-6'>
          <textarea
            value={originalText}
            onChange={handleTextChange}
            rows='4'
            placeholder='Enter the text you want to translate'
            className='w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150 ease-in-out bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className='w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition duration-150 ease-in-out'
        >
          Submit
        </button>

        {translatedLanguage && (
          <div className='mt-8 p-6 bg-yellow-100 border border-yellow-300 rounded-lg'>
            <h3 className='text-lg font-semibold text-yellow-800'>
              Translated Text:
            </h3>
            <p className='text-xl text-yellow-700'>{translatedLanguage}</p>
          </div>
        )}

        {translatedText && (
          <div className='mt-6'>
            <textarea
              readOnly
              value={translatedText}
              rows='4'
              placeholder='Translated text will appear here'
              className='w-full p-3 border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300'
            ></textarea>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
