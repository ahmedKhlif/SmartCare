'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import translations from '@/app/i18n/translations'

export default function FeedbackSection() {
  const { language } = useLanguage()
  const t = translations[language]?.feedback || translations.en.feedback
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate form submission (in production, send to backend)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Feedback submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', rating: 5, comment: '' })
      
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(t.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="feedback-section" id="feedback">
      <div className="container">
        <div className="feedback-section__header">
          <h2 className="feedback-section__title">{t.title}</h2>
          <p className="feedback-section__subtitle">{t.subtitle}</p>
        </div>

        <div className="feedback-section__content">
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="feedback-form__group">
              <label htmlFor="feedback-name" className="feedback-form__label">
                {t.name} <span className="feedback-form__required">*</span>
              </label>
              <input
                type="text"
                id="feedback-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.name}
                required
                className="feedback-form__input"
              />
            </div>

            <div className="feedback-form__group">
              <label htmlFor="feedback-email" className="feedback-form__label">
                {t.email} <span className="feedback-form__required">*</span>
              </label>
              <input
                type="email"
                id="feedback-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.email}
                required
                className="feedback-form__input"
              />
            </div>

            <div className="feedback-form__group">
              <label htmlFor="feedback-rating" className="feedback-form__label">
                {t.rating}
              </label>
              <select
                id="feedback-rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="feedback-form__select"
              >
                <option value="1">⭐ 1 - Poor</option>
                <option value="2">⭐⭐ 2 - Fair</option>
                <option value="3">⭐⭐⭐ 3 - Good</option>
                <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
                <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
              </select>
            </div>

            <div className="feedback-form__group">
              <label htmlFor="feedback-comment" className="feedback-form__label">
                {t.comment}
              </label>
              <textarea
                id="feedback-comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder={t.comment}
                rows="5"
                className="feedback-form__textarea"
              ></textarea>
            </div>

            {error && <div className="feedback-form__error">{error}</div>}
            {submitted && <div className="feedback-form__success">{t.success}</div>}

            <button
              type="submit"
              className="feedback-form__submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> {t.submit}
                </>
              )}
            </button>
          </form>

          <div className="feedback-section__image">
            <img 
              src="https://res.cloudinary.com/dqsok4hr5/image/upload/v1767657858/inside_bracelt_3d_jg5pq7.jpg"
              alt="SmartCare Bracelet Inside"
              className="feedback-section__img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
