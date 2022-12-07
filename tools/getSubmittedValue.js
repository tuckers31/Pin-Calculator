export default function getSubmittedValue(field) {
    const panelString = field.value;
    const panelStringArr = panelString.split(', ')
    const panelArr = panelStringArr.map(elem => Number(elem))
    return panelArr
}