// import useGetname from "../components/UseGetname"

const Home = () => {
  // const names = useGetname()

  return (
    <div className="home">
      <h2>Welcome to Mildred's Counter App</h2>
      <p>
        Effortlessly increase or decrease your counter with the click of a
        button. Our straightforward interface ensures that adjusting your count
        is a breeze. Need to tally up attendees at an event or track the number
        of tasks completed? It's as easy as pressing the "Increment" or
        "Decrement" button or the "Reset" button to reset value back to Zero.
        <br /> Move to the counter page link above to use.
      </p>
      <p>
        Beyond the basics of counting, The Counter App also includes a custom
        404 error page for those rare moments when you find yourself in
        uncharted digital territory. To test this feature:
        <li>Step 1: Launch the Counter App in your web browser.</li>
        <li>
          Step 2: Manually enter an invalid path to the URL in your browser's
          address bar (..../nonexistent-page).
        </li>
        <li>
          Step 3: Witness the user-friendly 404 error page, complete with a
          helpful message and a link to return to the home page. It's the extra
          touch that ensures your experience with our app is seamless and
          enjoyable.
        </li>
      </p>
    </div>
  );
};

export default Home;
