import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Semantic Tags ? </Accordion.Header>
          <Accordion.Body>
            Semantic Tag হলো সেইসব tag , যারা ব্রাউজারকে তাদের ব্যবহারের
            উদ্দেশ্য সপর্কে ক্লিয়ার একটা ধারনা দেয়। যেমন ঃ header, footer
            ,article. এগুলো হলো semantic tags. এইসব tag ব্যবহারের ফলে ব্রাউজারকে
            ওয়েবসাইটের বিভিন্ন অংশে কোথায় কি আছে তার একটা পরিষ্কার ধারণা দেওয়া
            যায়।
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is the difference between inline, block and inline-block
            elements?{" "}
          </Accordion.Header>
          <Accordion.Body>
            Inline Elements: inline elements হলো সেসব ইলিমেন্ট যারা , একে অপরের
            পাশাপাশি বসে ,যাদের নিজস্ব কোন দৈর্ঘ্য বা প্রস্থ নেই , যাদের দৈর্ঘ্য
            ও প্রস্থ মূলত কন্টেন্টের সাইজের ওপর নির্ভর করে। <br />
            Block elements: Block elements হলো সেইসব ইলিমেন্ট যারা, একটা row
            পুরোটা দখল করে রাখে , যারা প্রতিবার নতুন লাইন থেকে শুরু হয় , যাদের
            width ও height আমরা চাইলে নিয়ন্ত্রন করতে পারি।
            <br />
            Inline-block Elements : এরা এক ধরণের শংকর বৈশিষ্টের elements. এরা
            মূলত inline elements এর মতো আচরণ করে , তবে আমরা চাইলে block elements
            এর মতো তাদের দৈর্ঘ্য ও প্রস্থ সেট করে দিতে পারি। দুই ধরণের স্বভাবের
            কারনেই তাদের inline-block elements বলা হয়।
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            WHat is Context API ? what is the purpose of context api?{" "}
          </Accordion.Header>
          <Accordion.Body>
            Context API হচ্ছে global variable তৈরী ও জমা করে রাখার একটি মাধ্যম
            যা পরবর্তীতে সব component ব্যবহার করতে পারে। <br />
            মূলত props drilling problem কে solve করে context api. যেমনঃ আমরা আগে
            , props আকারে parent componet থেকে child component এ ডাটা
            পাঠাতাম।এভাবে ডিপ লেভেলের চাইল্ডের কাছে সেই ডাটাকে পৌছাতে অনেক গুলো
            props এর সাহায্য নিয়ে + অনেক component এর ভেতর দিয়ে সেই ডাটাকে যেতে
            হতো । কিন্তু context api ব্যবহার করলে আমরা grand parent এর ডাটাকে
            ডিরেক্ট চাইল্ডে ব্যবহার করতে পারবো।
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
