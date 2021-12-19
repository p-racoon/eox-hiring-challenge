import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Publisher from "../../pages/Publisher";
import Search from "../../pages/Search";
import { useNews } from "../../services/news/useNews";

export default function Main() {
  const [news, publishers] = useNews();
  console.log(`news`, news);
  return (
    <main>
      <Switch>
        <Route path="/search">
          <Search news={news}/>
        </Route>
        <Route path="/:publisherSlug">
          <Publisher publishers={publishers} />
        </Route>
        <Route path="*">
          <Home publishers={publishers} />
        </Route>
      </Switch>
    </main>
  );
}
