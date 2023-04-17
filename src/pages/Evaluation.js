

const Evaluation = () => {
    return (
      <>
        <form>
          <div class="form-control">
            <h3>Give an explanation for why you chose your answer and not the others</h3>
            <label for="response"></label>
            <textarea id="response" name="response" type="text" rows="5" cols="50" />
          </div>
          <button class="btn" type="submit">Next</button>
        </form>
      </>
    )
  }

export default Evaluation;