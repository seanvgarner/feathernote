export const sortedNotes = (state) => {
  return ( asArray(state).sort( (a,b) => {
    let aDate = new Date(a.updated_at);
    let bDate = new Date(b.updated_at);
    return bDate - aDate;
    })
  );
};



export const asArray = ({ notes }) => Object.keys(notes).map(key => notes[key]);
