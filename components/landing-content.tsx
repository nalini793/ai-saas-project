import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
  {
    name: "T. Lasso",
    avatar: "T",
    title: "Software Engineer",
    description: "This is the best application I've used!"
  },
    {
    name: "H. Finch",
    avatar: "H",
    title: "Student",
    description: "Very useful in breaking down problems and step by step guidance."
  },
       {
    name: "P. Dunphy",
    avatar: "P",
    title: "Data Analyst",
    description: "Great for touching upon concepts on the go and getting queries answered in real time."
  },
              {
    name: "S. Murphy ",
    avatar: "S",
    title: "Digital Artist",
    description: "Good for visualing ideas, and getting a prototype."
  },
    
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className=" text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className=" text-center grid grod-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className=" bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className=" text-lg">{item.name}</p>
                  <p className=" text-zinc-400 text-sm">{item.title}</p>
                </div>

              </CardTitle>
              <CardContent className=" pt-4 px-0">
                &quot {item.description} &quot

              </CardContent>
              </CardHeader>
          </Card>
        ))}
      </div>
      
    </div>
  )
}