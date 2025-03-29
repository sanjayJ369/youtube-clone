import { redis } from "./redits";
import { Ratelimit } from "@upstash/ratelimit";

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, "10s"),
});

export default ratelimit;
