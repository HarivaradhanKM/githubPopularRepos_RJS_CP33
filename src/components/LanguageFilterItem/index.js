import './index.css'

const LanguageFilterItem = props => {
  const {
    isSelected,
    languageFilter,
    setSelectedlanguageFilterAndGetRepositories,
  } = props
  const btnClassName = isSelected
    ? 'language-btn selected-language-btn'
    : 'language-btn'
  const onClickBtnLanguageFilter = () => {
    setSelectedlanguageFilterAndGetRepositories(languageFilter.id)
  }

  return (
    <li className="language-header">
      <button
        className={btnClassName}
        onClick={onClickBtnLanguageFilter}
        type="button"
      >
        {languageFilter.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
