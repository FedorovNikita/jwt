import { useEffect } from "react";
import { useSelector } from "react-redux";
import RuleService from "../../services/RuleService";

function Rules() {
  useEffect(() => {
    getRules();
  }, [])

  async function getRules() {
    try {
      const response = await RuleService.getRules();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>Rules</div>
  );
}

export default Rules;
