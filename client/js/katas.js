export const kataTopics = [
  {
    id: "js-kata-messy-shop",
    title: "Kata 1 — The Messy Shop",
    category: "JavaScript Methods Katas",
    difficulty: "Beginner",
    sections: [
      {
        title: "The task",
        content: "A small shop stores sales as plain text. The records are inconsistent: names have mixed capitalisation, fields contain unnecessary spaces, and some records are invalid.\n\nWrite a function called processSales(records). Each record is a string in this format:\n\ncustomerName | productName | price | quantity\n\nYour function must clean and validate every record, calculate each sale total, keep only valid sales worth at least 20, and return a summary."
      },
      {
        title: "Requirements",
        content: "1. Split each record into its four fields.\n2. Remove unnecessary spaces around every field.\n3. Format customer names in title case (for example, 'jOHN sMITH' becomes 'John Smith').\n4. Convert product names to lowercase.\n5. Convert price and quantity to numbers.\n6. Reject records that do not have exactly four fields, have empty names, have non-finite prices, have non-integer quantities, or have a price/quantity that is not positive.\n7. Calculate each sale total and round it to two decimal places.\n8. Keep only sales whose total is at least 20.\n9. Calculate the combined revenue and create one report line per remaining sale.\n10. Return an object with sales, totalRevenue and report."
      },
      {
        title: "Example input",
        content: "const records = [\n  '  john smith | Laptop | 899.99 | 1',\n  'ANNA JONES | mouse | 19.99 | 2',\n  '  peter brown | KEYBOARD | 49.50 | 1',\n  'Invalid Record',\n  'sarah white | Monitor | 199.99 | 2',\n  '  mike green | headphones | -15 | 1'\n];"
      },
      {
        title: "Expected output shape",
        content: "{\n  sales: [\n    {\n      customer: 'John Smith',\n      product: 'laptop',\n      price: 899.99,\n      quantity: 1,\n      total: 899.99\n    }\n  ],\n  totalRevenue: 899.99,\n  report: 'John Smith bought 1 laptop for 899.99'\n}\n\nThis is only an illustration of the shape. Your function must process every input record."
      },
      {
        title: "Reference solution",
        content: "function processSales(records) {\n  const sales = records\n    .map(record => {\n      const fields = record.split('|').map(field => field.trim());\n\n      if (fields.length !== 4) return null;\n\n      const [rawCustomer, rawProduct, rawPrice, rawQuantity] = fields;\n\n      const customer = rawCustomer\n        .toLowerCase()\n        .split(' ')\n        .filter(Boolean)\n        .map(word => word[0].toUpperCase() + word.slice(1))\n        .join(' ');\n\n      const product = rawProduct.toLowerCase();\n      const price = Number(rawPrice);\n      const quantity = Number(rawQuantity);\n\n      if (\n        !customer ||\n        !product ||\n        !Number.isFinite(price) ||\n        !Number.isInteger(quantity) ||\n        price <= 0 ||\n        quantity <= 0\n      ) {\n        return null;\n      }\n\n      const total = Math.round(price * quantity * 100) / 100;\n\n      return { customer, product, price, quantity, total };\n    })\n    .filter(Boolean)\n    .filter(sale => sale.total >= 20);\n\n  let totalRevenue = 0;\n  const reportLines = [];\n\n  sales.forEach(sale => {\n    totalRevenue += sale.total;\n    reportLines.push(\n      sale.customer + ' bought ' + sale.quantity + ' ' +\n      sale.product + ' for ' + sale.total.toFixed(2)\n    );\n  });\n\n  return {\n    sales,\n    totalRevenue: Math.round(totalRevenue * 100) / 100,\n    report: reportLines.join('\n')\n  };\n}"
      }
    ]
  },
  {
    id: "js-kata-student-analyzer",
    title: "Kata 2 — The Student Analyzer",
    category: "JavaScript Methods Katas",
    difficulty: "Intermediate",
    sections: [
      {
        title: "The task",
        content: "A school wants to analyse examination results. You receive an array of student objects. Each student has a name, an array of grades, and an active flag.\n\nWrite analyzeStudents(students, searchTerm). Analyse active students, calculate averages, create rankings, and search for names."
      },
      {
        title: "Requirements",
        content: "1. Ignore inactive students and students whose grades are missing, empty, or contain non-finite values.\n2. Create a new student record for each remaining student, including their average grade and first initial.\n3. Calculate each student's average using all their grades.\n4. Find the highest and lowest averages and the corresponding students. Return null for these students if there are no valid active students.\n5. Check whether at least one active student has an average above 90.\n6. Check whether every active student has an average of at least 40. For an empty active-student list, allPassed must be false.\n7. Calculate the overall average of all active students' averages. Also return its integer part as overallAverageWhole.\n8. Create a ranking from highest average to lowest, and another ranking in the opposite order.\n9. Return the top three students.\n10. Return students whose grades include a perfect score of 100.\n11. Search names case-insensitively. Return all names containing searchTerm, names starting with it, and names ending with it.\n12. Return the first matching student as searchedStudent, or null if there is no match."
      },
      {
        title: "Example input",
        content: "const students = [\n  { name: 'Alice', grades: [85, 92, 78, 95], active: true },\n  { name: 'Bob', grades: [45, 52, 48, 60], active: true },\n  { name: 'Charlie', grades: [91, 88, 94, 90], active: true },\n  { name: 'David', grades: [30, 40, 35, 42], active: false },\n  { name: 'Alicia', grades: [100, 96, 98], active: true }\n];\n\nconst result = analyzeStudents(students, 'ali');"
      },
      {
        title: "Expected output shape",
        content: "{\n  students: [],\n  highest: null,\n  lowest: null,\n  hasOutstandingStudent: true,\n  allPassed: true,\n  overallAverage: 0,\n  overallAverageWhole: 0,\n  ranking: [],\n  reverseRanking: [],\n  topThree: [],\n  perfectScoreStudents: [],\n  nameMatches: [],\n  prefixMatches: [],\n  suffixMatches: [],\n  searchedStudent: null\n}\n\nThe empty values are placeholders. Populate them with the calculated results."
      },
      {
        title: "Reference solution",
        content: "function analyzeStudents(students, searchTerm) {\n  const activeStudents = students\n    .filter(student =>\n      student.active &&\n      typeof student.name === 'string' &&\n      student.name.trim() &&\n      Array.isArray(student.grades) &&\n      student.grades.length > 0 &&\n      student.grades.every(Number.isFinite)\n    )\n    .map(student => ({\n      ...student,\n      average: student.grades.reduce((sum, grade) => sum + grade, 0) /\n        student.grades.length,\n      initial: student.name.substring(0, 1)\n    }));\n\n  const averages = activeStudents.map(student => student.average);\n  const highestAverage = averages.length ? Math.max(...averages) : null;\n  const lowestAverage = averages.length ? Math.min(...averages) : null;\n\n  const highest = activeStudents.find(student =>\n    student.average === highestAverage\n  ) || null;\n  const lowest = activeStudents.find(student =>\n    student.average === lowestAverage\n  ) || null;\n\n  const overallAverage = activeStudents.length\n    ? activeStudents.reduce((sum, student) => sum + student.average, 0) /\n      activeStudents.length\n    : 0;\n\n  const term = String(searchTerm || '').toLowerCase();\n  const nameMatches = term ? activeStudents.filter(student =>\n    student.name.toLowerCase().includes(term)\n  ) : [];\n  const prefixMatches = term ? activeStudents.filter(student =>\n    student.name.toLowerCase().startsWith(term)\n  ) : [];\n  const suffixMatches = term ? activeStudents.filter(student =>\n    student.name.toLowerCase().endsWith(term)\n  ) : [];\n\n  const ranking = activeStudents\n    .slice()\n    .sort((a, b) => b.average - a.average);\n\n  return {\n    students: activeStudents,\n    highest,\n    lowest,\n    hasOutstandingStudent: activeStudents.some(student => student.average > 90),\n    allPassed: activeStudents.length > 0 &&\n      activeStudents.every(student => student.average >= 40),\n    overallAverage: Math.round(overallAverage * 100) / 100,\n    overallAverageWhole: Math.trunc(overallAverage),\n    ranking,\n    reverseRanking: ranking.slice().reverse(),\n    topThree: ranking.slice(0, 3),\n    perfectScoreStudents: activeStudents.filter(student =>\n      student.grades.includes(100)\n    ),\n    nameMatches,\n    prefixMatches,\n    suffixMatches,\n    searchedStudent: nameMatches[0] || null\n  };\n}"
      }
    ]
  },
  {
    id: "js-kata-store-management",
    title: "Kata 3 — The Store Management System",
    category: "JavaScript Methods Katas",
    difficulty: "Advanced",
    sections: [
      {
        title: "The task",
        content: "You have been asked to build a small inventory management function. It receives product records, stock movements, and a search term. Product data may contain messy spacing and inconsistent capitalisation.\n\nWrite manageStore(products, movements, searchTerm). Clean the inventory, apply valid stock movements, calculate stock statistics, and produce a report."
      },
      {
        title: "Requirements",
        content: "1. Clean product names by replacing repeated whitespace with a single space and trimming the ends. Standardise categories to lowercase.\n2. Reject products with missing names/categories, non-finite or non-positive prices, or negative/non-integer stock values.\n3. Each valid product also has a positive integer minimumStock value.\n4. Apply movements in order. A movement is { productId, type, quantity }, where type is 'sale' or 'restock'. Ignore invalid movements. A sale must not reduce stock below zero.\n5. Calculate inventoryValue as the sum of price multiplied by stock, rounded to two decimal places.\n6. Return products that are out of stock and products below their minimumStock.\n7. For each product, calculate stockGap as the absolute difference between stock and minimumStock, fullBoxes as the number of complete boxes of five units, and boxesToReachMinimum as the number of five-unit boxes needed to reach minimumStock (zero if already at or above minimum).\n8. Find the most expensive and cheapest products. Return null if there are no valid products.\n9. Search product names and categories case-insensitively using searchTerm.\n10. Return products sorted by price (highest first) and by stock (lowest first).\n11. Calculate the average price, or zero if the inventory is empty.\n12. Electronics receive a 10% discount. Return their discounted prices rounded to two decimal places.\n13. Generate a readable report with the product count and inventory value."
      },
      {
        title: "Example input",
        content: "const products = [\n  { id: 1, name: '  Gaming   Mouse ', category: 'Electronics', price: 49.99, stock: 12, minimumStock: 5 },\n  { id: 2, name: 'MECHANICAL KEYBOARD', category: 'electronics', price: 89.99, stock: 3, minimumStock: 8 },\n  { id: 3, name: 'Office Chair', category: 'Furniture', price: 149.50, stock: 0, minimumStock: 2 }\n];\n\nconst movements = [\n  { productId: 1, type: 'sale', quantity: 2 },\n  { productId: 2, type: 'restock', quantity: 5 },\n  { productId: 3, type: 'sale', quantity: 1 }\n];\n\nconst result = manageStore(products, movements, 'mouse');"
      },
      {
        title: "Expected output shape",
        content: "{\n  products: [],\n  inventoryValue: 0,\n  outOfStock: [],\n  lowStock: [],\n  mostExpensive: null,\n  cheapest: null,\n  searchResults: [],\n  sortedByPrice: [],\n  sortedByStock: [],\n  averagePrice: 0,\n  discountedProducts: [],\n  report: ''\n}\n\nThe empty values are placeholders. Populate them with the calculated results."
      },
      {
        title: "Reference solution",
        content: "function manageStore(products, movements, searchTerm) {\n  const inventory = products\n    .map(product => ({\n      ...product,\n      name: String(product.name || '').replace(/\s+/g, ' ').trim(),\n      category: String(product.category || '').trim().toLowerCase()\n    }))\n    .filter(product =>\n      product.name &&\n      product.category &&\n      Number.isFinite(product.price) &&\n      product.price > 0 &&\n      Number.isInteger(product.stock) &&\n      product.stock >= 0 &&\n      Number.isInteger(product.minimumStock) &&\n      product.minimumStock > 0\n    );\n\n  movements.forEach(movement => {\n    if (\n      !movement ||\n      !Number.isInteger(movement.quantity) ||\n      movement.quantity <= 0 ||\n      !['sale', 'restock'].includes(movement.type)\n    ) return;\n\n    const product = inventory.find(item => item.id === movement.productId);\n    if (!product) return;\n\n    if (movement.type === 'restock') {\n      product.stock += movement.quantity;\n    } else if (product.stock >= movement.quantity) {\n      product.stock -= movement.quantity;\n    }\n  });\n\n  const inventoryValue = Math.round(\n    inventory.reduce((sum, product) =>\n      sum + product.price * product.stock, 0\n    ) * 100\n  ) / 100;\n\n  const outOfStock = inventory.filter(product => product.stock === 0);\n  const lowStock = inventory.filter(product =>\n    product.stock < product.minimumStock\n  );\n\n  const prices = inventory.map(product => product.price);\n  const highestPrice = prices.length ? Math.max(...prices) : null;\n  const lowestPrice = prices.length ? Math.min(...prices) : null;\n  const mostExpensive = inventory.find(product =>\n    product.price === highestPrice\n  ) || null;\n  const cheapest = inventory.find(product =>\n    product.price === lowestPrice\n  ) || null;\n\n  const term = String(searchTerm || '').toLowerCase().trim();\n  const searchResults = inventory.filter(product =>\n    product.name.toLowerCase().includes(term) ||\n    product.category.includes(term)\n  );\n\n  const sortedByPrice = inventory.slice().sort((a, b) => b.price - a.price);\n  const sortedByStock = inventory.slice().sort((a, b) => a.stock - b.stock);\n\n  const averagePrice = inventory.length\n    ? inventory.reduce((sum, product) => sum + product.price, 0) /\n      inventory.length\n    : 0;\n\n  const discountedProducts = inventory\n    .filter(product => product.category === 'electronics')\n    .map(product => ({\n      ...product,\n      discountedPrice: Math.round(product.price * 0.9 * 100) / 100\n    }));\n\n  inventory.forEach(product => {\n    product.stockGap = Math.abs(product.stock - product.minimumStock);\n    product.fullBoxes = Math.floor(product.stock / 5);\n    product.boxesToReachMinimum = Math.ceil(\n      Math.max(0, product.minimumStock - product.stock) / 5\n    );\n  });\n\n  const report =\n    'Products: ' + inventory.length +\n    '\nInventory value: ' + inventoryValue.toFixed(2) +\n    '\nOut of stock: ' + outOfStock.length +\n    '\nLow stock: ' + lowStock.length;\n\n  return {\n    products: inventory,\n    inventoryValue,\n    outOfStock,\n    lowStock,\n    mostExpensive,\n    cheapest,\n    searchResults,\n    sortedByPrice,\n    sortedByStock,\n    averagePrice: Math.round(averagePrice * 100) / 100,\n    discountedProducts,\n    report\n  };\n}"
      }
    ]
  }
  ,{
    id: "js-kata-pop-warmup",
    title: "Warm-up — The Report Editor",
    category: "JavaScript Methods Katas",
    difficulty: "Beginner",
    sections: [
      {
        title: "The task",
        content: "You have an array of report lines. Write removeLastReportLine(lines), which removes the final line and returns both the removed line and the remaining lines. Do not change the original array."
      },
      {
        title: "Example",
        content: "const lines = ['Sales: 4', 'Revenue: 250.00', 'Out of stock: 1'];\n\nremoveLastReportLine(lines);\n// {\n//   removed: 'Out of stock: 1',\n//   remaining: ['Sales: 4', 'Revenue: 250.00']\n// }"
      },
      {
        title: "Reference solution",
        content: "function removeLastReportLine(lines) {\n  const remaining = lines.slice();\n  const removed = remaining.pop();\n\n  return {\n    removed,\n    remaining\n  };\n}"
      }
    ]
  }

];
