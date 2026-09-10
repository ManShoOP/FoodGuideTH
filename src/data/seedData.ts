export const initialRestaurants = [
  {
    name: "The River Whispers Fine Dining & Lounge",
    slug: "the-river-whispers-nakhon-nayok",
    tagline: "ห้องอาหารริมสายน้ำนครนายก ดินเนอร์ใต้แสงเทียนและอาหารยุโรป-ไทยฟิวชั่นระดับพรีเมียม",
    description: "The River Whispers มอบประสบการณ์ดินเนอร์ระดับ 5 ดาวริมแม่น้ำนครนายก โดดเด่นด้วยการออกแบบสไตล์ Modern Luxury ผสมผสานธรรมชาติอันร่มรื่น คัดสรรวัตถุดิบชั้นเลิศทั้งเนื้อวัวนำเข้าจากออสเตรเลีย ซีฟู้ดสดใหม่จากทะเล และไวน์เซลลาร์ที่คัดสรรโดยซอมเมอลิเยร์ พร้อมดนตรีแจ๊สสดขับกล่อมในยามค่ำคืน",
    category: "Fine Dining & Wine Lounge",
    zone: "ริมแม่น้ำนครนายก",
    address: "88/9 หมู่ 3 ตำบลหินตั้ง อำเภอเมือง จังหวัดนครนายก 26000",
    priceRange: "$$$$ (1,200 - 2,500+ บาท/ท่าน)",
    rating: 4.9,
    reviewCount: 184,
    phone: "037-349-888",
    openingHours: "อังคาร - อาทิตย์ 11:30 - 23:00 น. (ปิดวันจันทร์)",
    coverImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ]),
    signatureDishes: JSON.stringify([
      "Australian Wagyu Ribeye Steak A5 กับเห็ดทรัฟเฟิล",
      "กุ้งแม่น้ำเผาตัวยักษ์ซอสครีมซัฟฟรอน",
      "Sous-Vide Duck Breast พอร์ตไวน์รีดักชัน",
      "Deconstructed Mango Sticky Rice Souffle"
    ]),
    highlights: JSON.stringify([
      "ที่นั่งริมแม่น้ำส่วนตัว (Private Riverside Pavilions)",
      "ห้องเก็บไวน์พรีเมียมกว่า 200 เลเบล",
      "ดนตรี Acoustic & Jazz สดทุกศุกร์-เสาร์",
      "บริการที่จอดรถ VIP พร้อม Valet Parking"
    ]),
    googleMapUrl: "https://maps.google.com/?q=Nakhon+Nayok+River",
    isFeatured: true,
    isLuxury: true
  },
  {
    name: "Khun Dan Royal Crest Panorama",
    slug: "khun-dan-royal-crest-panorama",
    tagline: "จุดชมวิวพระอาทิตย์ตกดินเหนือสันเขื่อน พร้อมสเต็กเนื้อดรายเอจและไวน์ระดับเวิลด์คลาส",
    description: "Khun Dan Royal Crest ตั้งอยู่บนเนินเขาสูง มองเห็นทัศนียภาพกว้างไกลของเขื่อนขุนด่านปราการชลแบบพาโนรามา 360 องศา สัมผัสความงามยามอัสดงพร้อมเสิร์ฟสเต็กเนื้อ Dry-Aged ผ่านการบ่มกว่า 45 วัน ปรุงด้วยความพิถีพิถันจากเชฟระดับมิชลิน บรรยากาศหรูหรา โอ่โถง เหมาะสำหรับโอกาสพิเศษและการเฉลิมฉลอง",
    category: "Steakhouse & Rooftop Lounge",
    zone: "เขื่อนขุนด่าน",
    address: "123 หมู่ 2 ทางขึ้นเขื่อนขุนด่านปราการชล ตำบลหินตั้ง อำเภอเมือง จังหวัดนครนายก",
    priceRange: "$$$$ (1,500 - 3,000+ บาท/ท่าน)",
    rating: 4.9,
    reviewCount: 210,
    phone: "037-385-999",
    openingHours: "ทุกวัน 16:00 - 24:00 น.",
    coverImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ]),
    signatureDishes: JSON.stringify([
      "Dry-Aged Tomahawk 1.2kg กับเกลือหิมาลายันรมควัน",
      "Hokkaido Scallop Carpaccio กับน้ำมันเห็ดทรัฟเฟิลดำ",
      "Lobster Thermidor อบชีสกรูแยร์สไตล์ฝรั่งเศส",
      "Signature Smoked Smoked Old Fashioned Cocktail"
    ]),
    highlights: JSON.stringify([
      "วิวพาโนรามาพระอาทิตย์ตกเขื่อนขุนด่านสวยที่สุดในนครนายก",
      "บริการ Helicopter Pad & Private Helipad บริเวณรีสอร์ท",
      "เนื้อดรายเอจคัดพิเศษเฉพาะตัว",
      "เหมาะสำหรับดินเนอร์ขอแต่งงานและเลี้ยงฉลอง"
    ]),
    googleMapUrl: "https://maps.google.com/?q=Khun+Dan+Prakarn+Chon+Dam",
    isFeatured: true,
    isLuxury: true
  },
  {
    name: "Maison de Sarika Luxury Tea & Bistro",
    slug: "maison-de-sarika-tea-bistro",
    tagline: "วิลล่าหรูสไตล์ยุโรปกลางหุบเขา บริการเซ็ต Afternoon Tea ชั้นสูง และอาหารฝรั่งเศสร่วมสมัย",
    description: "คฤหาสน์สไตล์เฟรนช์คันทรี่สีขาวสะอาดตา โอบล้อมด้วยสวนกุหลาบอังกฤษและทิวเขาน้ำตกสาริกา Maison de Sarika เชิญคุณมาสัมผัสวัฒนธรรมการจิบน้ำชายามบ่ายระดับไฮโซ พร้อมชาเกรดพรีเมียมจาก TWG และ Mariage Frères รวมทั้งอาหารยุโรปคลาสสิก ปรุงสดใหม่จานต่อจาน",
    category: "French Bistro & High Tea",
    zone: "สาริกา",
    address: "55/1 ถนนสาริกา-นางรอง ตำบลสาริกา อำเภอเมือง จังหวัดนครนายก",
    priceRange: "$$$ (600 - 1,500 บาท/ท่าน)",
    rating: 4.8,
    reviewCount: 156,
    phone: "089-775-4321",
    openingHours: "พุธ - จันทร์ 10:00 - 20:30 น. (ปิดวันอังคาร)",
    coverImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    ]),
    signatureDishes: JSON.stringify([
      "Royal English Afternoon Tea Set เสิร์ฟพร้อม Scones อบสดใหม่",
      "Beef Bourguignon ตุ๋นไวน์แดงเบอร์กันดี 8 ชั่วโมง",
      "Duck Confit กรอบนอกนุ่มในกับมันบดเนยฝรั่งเศส",
      "Valrhona Chocolate Lava Cake ไอศกรีมวานิลลามาดากัสการ์"
    ]),
    highlights: JSON.stringify([
      "สวนกุหลาบอังกฤษส่วนตัว มุมถ่ายรูปสวยสง่า",
      "ชาชั้นสูงนำเข้าจากฝรั่งเศสและลอนดอน",
      "กระจก Floor-to-Ceiling ชมวิวขุนเขา",
      "ห้องน้ำส่วนตัวตกแต่งด้วยหินอ่อนคาราร่า"
    ]),
    googleMapUrl: "https://maps.google.com/?q=Sarika+Waterfall+Nakhon+Nayok",
    isFeatured: true,
    isLuxury: true
  },
  {
    name: "เรือนไทยคุณหลวง นครนายก (Baan Suan Khun Luang Private Table)",
    slug: "baan-suan-khun-luang-private-table",
    tagline: "เรือนไทยประยุกต์ร่วมสมัย เสิร์ฟสำรับชาววังโบราณรสเลิศแบบ Chef's Table รังสรรค์ด้วยวัตถุดิบอินทรีย์",
    description: "ย้อนรอยความประณีตของอาหารไทยโบราณในเรือนไม้สักทองริมบึงบัวหลวง รับเฉพาะการจองล่วงหน้าวันละ 2 รอบ เพื่อส่งมอบการดูแลแบบเอ็กซ์คลูซีฟ เชฟรังสรรค์สำรับชาววังตามฤดูกาล ผสานสมุนไพรพื้นถิ่นนครนายกที่ปลูกเองแบบออร์แกนิก 100%",
    category: "Royal Thai Chef's Table",
    zone: "บ้านนา",
    address: "24 หมู่ 5 ตำบลบ้านพริก อำเภอบ้านนา จังหวัดนครนายก",
    priceRange: "$$$$ (1,800 - 3,200 บาท/ท่าน)",
    rating: 5.0,
    reviewCount: 98,
    phone: "081-998-7654",
    openingHours: "รอบกลางวัน 12:00 น. | รอบค่ำ 18:30 น. (ต้องสำรองที่นั่งล่วงหน้า)",
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ]),
    signatureDishes: JSON.stringify([
      "แสร้งว่ากุ้งแม่น้ำย่างรมควันกลิ่นกานพลู",
      "แกงรัญจวนเนื้อวากิวโคขุนโบราณ",
      "มัสมั่นเนื้อแกะน่องโตเสิร์ฟกับโรตีบริยอช",
      "ส้มฉุนหิมะลอยแก้วผลไม้โบราณ"
    ]),
    highlights: JSON.stringify([
      "Private Dining รับจำกัดรอบละไม่เกิน 3 โต๊ะ",
      "อาหารไทยตำรับชาววังแท้ หาชิมได้ยากยิ่ง",
      "เรือนไทยไม้สักแท้กลางสวนบัวอลังการ",
      "จับคู่อาหารไทยกับเครื่องดื่มสมุนไพรคราฟต์ระดับพรีเมียม"
    ]),
    googleMapUrl: "https://maps.google.com/?q=Banna+Nakhon+Nayok",
    isFeatured: true,
    isLuxury: true
  },
  {
    name: "Nang Rong Secret Falls Pavilion",
    slug: "nang-rong-secret-falls-pavilion",
    tagline: "ดินเนอร์ส่วนตัวริมลำธารน้ำใสธรรมชาติ สัมผัสความสงบและสุนทรีย์ของเสียงน้ำไหลในแบบ Exclusive",
    description: "ซ่อนตัวอยู่ในป่าเขาอันเขียวชอุ่มติดสายน้ำตกนางรอง Nang Rong Secret Falls ให้คุณดื่มด่ำกับธรรมชาติอย่างใกล้ชิดบนศาลาลอยน้ำส่วนตัว ปรุงอาหารสไตล์ Contemporary Asian โดยใช้วัตถุดิบสดใหม่จากฟาร์มออร์แกนิกท้องถิ่นและเนื้อพรีเมียมนำเข้า",
    category: "Riverside Nature Luxury",
    zone: "นางรอง",
    address: "99 หมู่ 1 ใกล้น้ำตกนางรอง ตำบลหินตั้ง อำเภอเมือง จังหวัดนครนายก",
    priceRange: "$$$ (800 - 1,800 บาท/ท่าน)",
    rating: 4.8,
    reviewCount: 142,
    phone: "037-385-112",
    openingHours: "ทุกวัน 11:00 - 22:00 น.",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ]),
    signatureDishes: JSON.stringify([
      "ปลากะพงทอดยำสมุนไพรสดสูตรคุณย่า",
      "ซี่โครงแกะย่างโรสแมรี่ซอสไวน์แดงพริกไทยสด",
      "ต้มยำกุ้งมังกรน้ำใสเห็ดโคนป่า",
      "ไอศกรีมกะทิสดมะพร้าวอ่อนรมควันเทียน"
    ]),
    highlights: JSON.stringify([
      "โต๊ะอาหารศาลาไม้ติดริมลำธารน้ำตก",
      "อากาศบริสุทธิ์โอโซนธรรมชาติ 100%",
      "บริการ Butler ส่วนตัวคอยดูแลโต๊ะ VIP",
      "ไฟประดับสวนยามค่ำคืนสุดโรแมนติก"
    ]),
    googleMapUrl: "https://maps.google.com/?q=Nang+Rong+Waterfall+Nakhon+Nayok",
    isFeatured: true,
    isLuxury: true
  },
  {
    name: "L'Oasis Glasshouse & Gourmet Grill",
    slug: "loasis-glasshouse-gourmet-grill",
    tagline: "สถาปัตยกรรมกระจกเรือนกระจกโมเดิร์นลักชูรี ท่ามกลางสวนสนและสระว่ายน้ำ พร้อมซีฟู้ดย่างเตาถ่านพรีเมียม",
    description: "โดดเด่นด้วยสถาปัตยกรรมเรือนกระจกสไตล์นอร์ดิกผสมผสานความหรูหราทันสมัย ตั้งอยู่ใจกลางสวนสนและลำธารเทียม L'Oasis เสิร์ฟทั้งกาแฟ Specialty Coffee ขนมหวานเบเกอรี่ระดับ Patisserie จากเลอกอร์ดองเบลอ และอาหารมื้อค่ำสไตล์กูร์เมต์กริลล์ที่อบอวลไปด้วยกลิ่นอายความสุข",
    category: "Modern Luxury Cafe & Grill",
    zone: "เขื่อนขุนด่าน",
    address: "77 หมู่ 4 ถนนเลียบคลองส่งน้ำเขื่อนขุนด่าน ตำบลหินตั้ง อำเภอเมือง จังหวัดนครนายก",
    priceRange: "$$$ (700 - 1,600 บาท/ท่าน)",
    rating: 4.7,
    reviewCount: 230,
    phone: "085-442-1234",
    openingHours: "ทุกวัน 09:30 - 21:30 น.",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    images: JSON.stringify([
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497644083578-611b798c60f3?auto=format&fit=crop&w=1200&q=80"
    ]),
    signatureDishes: JSON.stringify([
      "Norwegian Salmon Steak ซอสเลมอนดิลล์ครีม",
      "สปาเก็ตตี้แบล็คอิงค์หมึกไข่และไข่กุ้งคาร์เวียร์",
      "Burrata Salad สลัดมะเขือเทศโครงการหลวงและบัลซามิก 12 ปี",
      "Signature Yuzu Honeycomb Mousse Cake"
    ]),
    highlights: JSON.stringify([
      "เรือนกระจกควบคุมอุณหภูมิเย็นสบายทุกฤดูกาล",
      "มุมถ่ายภาพระดับ Instagrammable Luxury",
      "บาริสต้ามือรางวัลและเมล็ดกาแฟ Geisha หายาก",
      "Pet-Friendly โซนสวนกลางแจ้งพรีเมียม"
    ]),
    googleMapUrl: "https://maps.google.com/?q=Nakhon+Nayok",
    isFeatured: true,
    isLuxury: true
  }
];

export const initialCategories = [
  {
    name: "Fine Dining & Wine Lounge",
    slug: "fine-dining",
    description: "ดินเนอร์หรูระดับพรีเมียม พร้อมไวน์เซลลาร์และบริการระดับ 5 ดาว",
    icon: "UtensilsCrossed"
  },
  {
    name: "Riverside Luxury",
    slug: "riverside-luxury",
    description: "ดื่มด่ำรสชาติอาหารชั้นเลิศริมสายน้ำนครนายกและลำธารธรรมชาติ",
    icon: "Waves"
  },
  {
    name: "Steakhouse & Rooftop",
    slug: "steakhouse-rooftop",
    description: "สเต็กเนื้อดรายเอจคัดพิเศษและวิวพาโนรามาพระอาทิตย์ตก",
    icon: "Flame"
  },
  {
    name: "Royal Thai Chef's Table",
    slug: "royal-thai",
    description: "สำรับชาววังโบราณรสเลิศในเรือนไทยไม้สัก รับจองเฉพาะรอบพิเศษ",
    icon: "Crown"
  },
  {
    name: "French Bistro & High Tea",
    slug: "french-bistro-tea",
    description: "วัฒนธรรมจิบน้ำชายามบ่ายระดับไฮโซและอาหารฝรั่งเศสร่วมสมัย",
    icon: "Coffee"
  }
];

export const initialZones = [
  {
    name: "เขื่อนขุนด่าน",
    slug: "khun-dan-dam",
    description: "โซนวิวอลังการเหนือสันเขื่อน บรรยากาศพระอาทิตย์ตกดินและธรรมชาติโอบล้อม"
  },
  {
    name: "ริมแม่น้ำนครนายก",
    slug: "riverside",
    description: "โซนริมสายน้ำเย็นฉ่ำ เหมาะสำหรับดินเนอร์สุดโรแมนติกใต้แสงดาว"
  },
  {
    name: "สาริกา",
    slug: "sarika",
    description: "หุบเขาและน้ำตกสาริกา แหล่งรวมวิลล่าหรูและคาเฟ่ระดับไฮเอนด์"
  },
  {
    name: "นางรอง",
    slug: "nang-rong",
    description: "ป่าเขาและลำธารน้ำใสธรรมชาติ สัมผัสความสงบแบบ Exclusive"
  },
  {
    name: "บ้านนา",
    slug: "banna",
    description: "ดินเนอร์ส่วนตัวท่ามกลางทุ่งนาและเรือนไทยประยุกต์อันเงียบสงบ"
  }
];
